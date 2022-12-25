import React from 'react'
import './CategoryItem.scss'

const CategoryItemComponent = ({ category }) => {
	
	const {imageUrl,title}=category;
	return (
	
		<div className="category-item-container">
					<div className="background-image" style={{
						backgroundImage:`url(${imageUrl})`,
					}}/>
						
				
 
          <div className="body">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
			)
}

export default CategoryItemComponent