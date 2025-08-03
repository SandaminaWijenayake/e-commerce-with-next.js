import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, allProducts, otherimages } from "@/lib/mongodb";
import { HeroImage } from "@/lib/mongodb";

type ProductState = {
  items: Product[];
  loading: boolean;
  error: string | null;
};

type HeroImageState = {
  items: HeroImage[];
  loading: boolean;
  error: string | null;
};

type allProductsState = {
  items: allProducts[];
  loading: boolean;
  error: string | null;
};

type otherImagesState = {
  items: otherimages[];
  loading: boolean;
  error: string | null;
};

const initialOtherImagesState: otherImagesState = {
  items: [],
  loading: false,
  error: null,
};

const initialallProductsState: allProductsState = {
  items: [],
  loading: false,
  error: null,
};

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

const initialHeroImagesState: HeroImageState = {
  items: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getProductsAsync.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(getProductsAsync.rejected, (state, action) => {
        console.error("Failed to fetch products:", action.error.message);
        state.loading = false;
      });
  },
});

const heroImagesSlice = createSlice({
  name: "heroimages",
  initialState: initialHeroImagesState,
  reducers: {
    setHeroImages(state, action: PayloadAction<HeroImage[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHeroImagesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getHeroImagesAsync.fulfilled,
        (state, action: PayloadAction<HeroImage[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(getHeroImagesAsync.rejected, (state, action) => {
        console.error("Failed to fetch hero images:", action.error.message);
        state.loading = false;
      });
  },
});

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: initialallProductsState,
  reducers: {
    setAllProducts(state, action: PayloadAction<allProducts[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllProductsAsync.fulfilled,
        (state, action: PayloadAction<allProducts[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(getAllProductsAsync.rejected, (state, action) => {
        console.error("Failed to fetch proud products:", action.error.message);
        state.loading = false;
      });
  },
});

const otherimagesSlice = createSlice({
  name: "otherimages",
  initialState: initialOtherImagesState,
  reducers: {
    setOtherImages(state, action: PayloadAction<otherimages[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOtherImagesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getOtherImagesAsync.fulfilled,
        (state, action: PayloadAction<otherimages[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(getOtherImagesAsync.rejected, (state, action) => {
        console.error("Failed to fetch other images:", action.error.message);
        state.loading = false;
      });
  },
});

export const getProductsAsync = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data: Product[] = await response.json();
    return data;
  }
);

export const getHeroImagesAsync = createAsyncThunk(
  "heroimages/getHeroImages",
  async () => {
    const response = await fetch("/api/heroimages");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data: HeroImage[] = await response.json();
    return data;
  }
);

export const getAllProductsAsync = createAsyncThunk(
  "allProducts/getAllProducts",
  async () => {
    const response = await fetch("/api/allProducts");
    if (!response.ok) {
      throw new Error("Failed to fetch all products");
    }
    const data: allProducts[] = await response.json();
    return data;
  }
);

export const getOtherImagesAsync = createAsyncThunk(
  "otherimages/getOtherImages",
  async () => {
    const response = await fetch("/api/otherimages");
    if (!response.ok) {
      throw new Error("Failed to fetch other images");
    }
    const data: otherimages[] = await response.json();
    return data;
  }
);

export const { setOtherImages } = otherimagesSlice.actions;
export const otherImagesReducer = otherimagesSlice.reducer;
export const { setAllProducts } = allProductsSlice.actions;
export const allProductsReducer = allProductsSlice.reducer;
export const { setProducts } = productSlice.actions;
export const { setHeroImages } = heroImagesSlice.actions;
export const heroImagesReducer = heroImagesSlice.reducer;
export default productSlice.reducer;
