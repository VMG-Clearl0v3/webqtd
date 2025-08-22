import { Product } from "@/types/product";

const productList: Product[] = [
  {
    id: 1,
    image: "/image/news_1.jpg",
    title: "Vay tiêu dùng",
    slug: "vay-tieu-dung",
    type: "loan",
  },
  {
    id: 2,
    image: "/image/news_2.jpg",
    title: "Vay sản xuất kinh doanh",
    slug: "vay-san-xuat-kinh-doanh",
    type: "loan",
  },
    {
    id: 3,
    image: "/image/2_9.png",
    title: "Vay cầm cố sổ tiết kiệm",
    slug: "vay-cam-co-stk",
    type: "loan",
  }, 
  {
    id: 4,
    image: "/image/icon.png",
    title: "Vay cầm cố sổ tiết kiệm",
    slug: "gui-co-ky-han",
    type: "deposit",
  }, 
  {
    id: 4,
    image: "/image/footer.png",
    title: "Vay cầm cố sổ tiết kiệm",
    slug: "gui-khong-ky-han",
    type: "deposit",
  }, 
];

export async function getProduct(): Promise<Product[]> {
  return productList;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return productList.find((item) => item.slug === slug);
}
