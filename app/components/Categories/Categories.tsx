'use client';
import React, { useState, useEffect } from 'react';
import styles from './Categories.module.css';

interface Category {
    id: number;
    nama: string;
  }

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://my-json-server.typicode.com/Myusuft/catalog-api-backend/categories');
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    fetchCategories();
  }, []);

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => (
        <div key={category.id} className={styles.categoryCard}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg' alt={category.nama} className={styles.categoryImage} />
          <div className={styles.categoryDetails}>
            <h2>{category.nama}</h2>
            <p>Click here</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;