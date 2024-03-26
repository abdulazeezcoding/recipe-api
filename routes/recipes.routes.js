import { Router } from "express";
import { addRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";

// Configure upload middleware 
const upload = multer({dest: 'uploads/images'});

// Create recipes router
export const router = Router();

// Post data
router.post("/", upload.single('image'), addRecipe);

router.get("/", getRecipes);

router.get("/:id", getRecipe);

router.patch("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);
