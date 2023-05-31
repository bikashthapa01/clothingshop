import React from 'react'
import "./Categories.styles.scss"
import { CategoryItem } from '../category-item/CategoryItem'

export const Categories = ({categories}) => {
  return (
    <div className="categories-container">
      {
        categories.map((category) => {
            return <CategoryItem category={category} />
        })
      }
    </div>)}
