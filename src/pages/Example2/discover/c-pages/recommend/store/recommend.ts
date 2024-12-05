import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend, getNewAlbum } from "../service/recommend";

export const fetchBannerDataAction = createAsyncThunk("banners", async (args, { dispatch }) => {
  const res: any = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

export const fetchHotRecommendAction = createAsyncThunk("hotRecommend", async (args, { dispatch }) => {
  const res: any = await getHotRecommend(8)
  dispatch(changeHotRecommendAction(res.result))
})

export const fetchNewAlbumAction = createAsyncThunk("newAlbum", async (args, { dispatch }) => {
  const res: any = await getNewAlbum()
  dispatch(changeNewAlbumAction(res.albums))
})

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbum: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbum: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, {payload} ) => {
  //     state.banners = payload
  //   })
  // }
})

export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction } = recommendSlice.actions
export default recommendSlice.reducer