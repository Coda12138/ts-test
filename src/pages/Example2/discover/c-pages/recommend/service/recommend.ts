import codaRequest from "@/service";

export function getBanners() {
  return codaRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return codaRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}