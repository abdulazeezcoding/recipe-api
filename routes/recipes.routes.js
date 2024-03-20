import { Router } from "express";
import { addRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } from "../controllers/recipes.controller.js";

export const router = Router();

const data = [
  {
    "id": 1,
    "tutor": "MickeyMond",
    "class": "Alpha",
  },
  {
    id: 2,
    "tutor": "Racheal",
    "class": "Alpha",
  },
  
];


// Post data
router.post("", addRecipe);

router.get("", getRecipes);

router.get("/:id", getRecipe);

router.patch("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);
