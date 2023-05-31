import React from 'react'
import "./CategoryItem.styles.scss"

export const CategoryItem = ({category}) => {
  return (
    <div key={category.id} className="category-container">
        <div className="background-image" style={{backgroundImage:`Url(${category.imageUrl})`}}/>
            <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
        </div>
    </div>
  )
}
