import { Router } from "express";
import { addRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";

// Configure upload middleware 
const upload = multer({dest: 'uploads/images'});

// Create recipes router
export const router = Router();

// Create a recipe
router.post("/", upload.single('image'), addRecipe);

// Fetch all recipes
router.get("/", getRecipes);

// Fetch a recipe using it's ID
router.get("/:id", getRecipe);

// Update recipe data
router.patch("/:id", updateRecipe);

// Delete a recipe
router.delete("/:id", deleteRecipe);
