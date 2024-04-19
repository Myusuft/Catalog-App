'use client';
import React, { useState, useEffect } from 'react';
import styles from './Product.module.css';

interface Product {
  id: number;
  kode: string;
  nama: string;
  harga: number;
  is_ready: boolean;
  gambar: string;
  category: {
    id: number;
    nama: string;
  };
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://my-json-server.typicode.com/Myusuft/catalog-api-backend/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  const handleNext = () => {
    const maxPage = Math.ceil(products.length / 3); 
    setCurrentPage((prevPage) => (prevPage === maxPage ? 1 : prevPage + 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? maxPage : prevPage - 1));
  };

  const visibleProducts = products.slice((currentPage - 1) * 3, currentPage * 3);

  return (
    <div className={styles.products}>
      <h4 className={styles.centeredHeading}>Products</h4>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <p>Loading products...</p>
        </div>
      ) : (
        <div className={styles.productCarousel}>
          <button className={styles.arrowLeft} disabled={currentPage === 1} onClick={handlePrev}>
            &#8592;
          </button>
          <div className={styles.productList}>
            {visibleProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.gambar} alt={product.nama} width={200} height={200} />
                <div className={styles.productDetails}>
                  <h5>{product.nama}</h5>
                  <p>Kode: {product.kode}</p>
                  <p>Harga: {product.harga}</p>
                  <p>Is Ready: {product.is_ready ? 'Yes' : 'No'}</p>
                  <p>Category: {product.category.nama}</p>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.arrowRight} disabled={currentPage === Math.ceil(products.length / 3)} onClick={handleNext}>
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;