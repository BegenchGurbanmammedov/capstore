import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
    console.log(state.categories)
    return state.categories;
}

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        return categoriesSlice.categories;
    }
)


export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories)=> {
        console.log('livertpool')
        return categories.reduce((acc,category)=>{
            console.log(category)
        const {title,items}=category;
        acc[title.toLowerCase()]=items;
        return acc;
        },{})})
    
