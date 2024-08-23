import express from "express";
import multer from "multer";
import { checkRules } from "../middleware/checkRules.js";
import {
  createdResponse,
  errorResponse,
  noContentResponse,
  successResponse,
} from "../utils/responseHelper.js";
import {
  menuPickId,
  menuUpdateValidationRules,
  menuValidationRules,
} from "../validationRules/menuValidationSchema.js";
import Menu from "./menu.model.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "uploads/");
  },
  filename: (req, file, fn) => {
    fn(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
  try {
    const rawMenu = await Menu.findAll();

    const menus = rawMenu.map((menu) => {
      const imgUrl = menu.menu_img
        ? `${req.protocol}://${req.get("host")}/${menu.menu_img}`
        : null;

      return {
        ...menu.toJSON(),
        menu_img: imgUrl,
      };
    });
    return successResponse(res, "Menus retrieved successfully", menus);
  } catch (error) {
    return errorResponse(res, "Failed to retrieve menus", error);
  }
});

router.get("/:id", menuPickId, checkRules, async (req, res) => {
  const { id } = req.params;
  const pickedMenu = await Menu.findByPk(id);

  try {
    if (pickedMenu) {
      return successResponse(res, "Menu retrieved successfully", pickedMenu);
    } else {
      return errorResponse(res, "Menu not found", [], 404);
    }
  } catch (error) {
    return errorResponse(res, "Failed to retrieve data", error, 500);
  }
});

router.post(
  "/",
  upload.single("menu_img"),
  menuValidationRules,
  checkRules,
  async (req, res) => {
    const { menu_name, menu_price, show_on_catalog } = req.body;
    const menu_img = req.file ? req.file.path : null;

    try {
      const uploadMenu = await Menu.create({
        menu_name,
        menu_price,
        menu_img,
        show_on_catalog: show_on_catalog || false,
      });

      return createdResponse(res, "Menu created successfully", uploadMenu);
    } catch (error) {
      console.error("Error fetching menus:", error);
      return errorResponse(res, "Failed to create menu item", error);
    }
  }
);

router.put("/:id", upload.single("menu_img"), async (req, res) => {
  const { id } = req.params;
  const { menu_name, menu_price, show_on_catalog } = req.body;

  try {
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return errorResponse(res, "Menu not found", [], 404);
    }

    menu.menu_name = menu_name;
    menu.menu_price = menu_price;
    menu.show_on_catalog = show_on_catalog ? true : false;

    if (req.file) {
      menu.menu_img = req.file.path;
    }

    await menu.save();

    return successResponse(res, "Menu updated successfully", menu);
  } catch (error) {
    console.error("Error updating menu:", error);
    return errorResponse(res, "Failed to update menu item", error);
  }
});

router.delete("/:id", menuPickId, checkRules, async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Menu.destroy({
      where: { menu_id: id },
    });

    if (deleted) {
      return noContentResponse(res, "Menu deleted successfully");
    } else {
      return errorResponse(res, "Menu not found", null, 404);
    }
  } catch (error) {
    return errorResponse(res, "Failed to delete menu item", error);
  }
});

export default router;
