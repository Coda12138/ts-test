import codaRequest from "@/service";

export function getBanners() {
  return codaRequest.get({
    url: '/banner'
  })
}