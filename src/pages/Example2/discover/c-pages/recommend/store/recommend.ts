import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend } from "../service/recommend";

export const fetchBannerDataAction = createAsyncThunk("banners", async (args, { dispatch }) => {
  const res: any = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

export const fetchHotRecommendAction = createAsyncThunk("hotRecommend", async (args, { dispatch }) => {
  const res: any = await getHotRecommend(8)
  dispatch(changeHotRecommendAction(res.result))
})

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
}

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, {payload} ) => {
  //     state.banners = payload
  //   })
  // }
})

export const { changeBannersAction, changeHotRecommendAction } = recommendSlice.actions
export default recommendSlice.reducer