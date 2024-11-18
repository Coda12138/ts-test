import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners } from "../service/recommend";

export const fetchBannerDataAction = createAsyncThunk("banners", async (args, { dispatch }) => {
  const res: any = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, {payload} ) => {
  //     state.banners = payload
  //   })
  // }
})

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer