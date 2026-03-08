const supabase = require("../config/supabaseClient");

exports.getProducts = async (query) => {

    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 20;
    const search = query.search;
    const sort = query.sort || "id";
    const order = query.order === "desc" ? false : true;

    const offset = (page - 1) * limit;

    let request = supabase
        .from("products")
        .select("id,name,price", { count: "exact", head: false });

    if (search) {
        request = request.ilike("name", `%${search}%`);
    }

    request = request.order(sort, { ascending: order });

    const { data, error, count } = await request
        .range(offset, offset + limit - 1);

    if (error) throw error;

    return {
        data,
        page,
        limit,
        total: count
    };
};