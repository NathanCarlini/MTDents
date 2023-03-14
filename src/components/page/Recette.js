import React from 'react'
import { recipeItems } from '../../Data/nomRecette'
import RecetteName from '../RecetteName'

export default function Recette() {
  return (
    <div>
        <h2>
            L'omelette tendresse
        </h2>

        <div>
            <RecetteName input={recipeItems.itemsName[0].name} />
        </div>
    </div>
  )
}
