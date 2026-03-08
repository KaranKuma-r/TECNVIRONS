/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import API from "../services/api";

import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import Pagination from "../components/Pagination";

function Dashboard() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState("id");

    useEffect(() => {

        setLoading(true);

        API.get(`/products?page=${page}&limit=20&search=${search}&sort=${sort}`)
            .then(res => {
                setProducts(res.data.data);
                setLoading(false); 
            })
            .catch(() => {
                setLoading(false);
            });

    }, [page, search, sort]);

    return (

        <div className="dashboard">

            <h1 className="dashboard-title">DataMart Dashboard</h1>

            <div className="dashboard-controls">
                <SearchBar setSearch={setSearch} />
                <SortDropdown setSort={setSort} />
            </div>

            <div className="dashboard-products">

                {loading ? (
                    <p className="loading">Loading products...</p>
                ) : products.length === 0 ? (
                    <p className="no-results">No products found</p>
                ) : (
                    <ProductList products={products} />
                )}

            </div>

            <div className="dashboard-pagination">
                <Pagination page={page} setPage={setPage} />
            </div>

        </div>

    );

}

export default Dashboard;