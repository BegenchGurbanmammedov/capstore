import {Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category'
import { setCategories } from '../../store/categories/category.action';
import './Shop.scss'
const  Shop=()=> {
	const dispatch = useDispatch();
	useEffect(()=>{
		const getCategoriesMap=async()=>{
			const categoriesArray = await getCategoriesAndDocuments();

			dispatch(setCategories(categoriesArray))
		}

		getCategoriesMap()
	},[])
	return (
		<Routes>
			<Route index element={<CategoriesPreview/>} />
			<Route path=":category" element={<Category/>} />
		</Routes>
	)
}

export default Shop