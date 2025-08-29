import { Product } from "@/types/product";

const productList: Product[] = [
  {
    id: 1,
    image: "/image/news_1.jpg",
    title: "Vay tiêu dùng",
    slug: "vay-tieu-dung",
    description: "a",
    type: "loan",
  },
  {
    id: 2,
    image: "/image/news_2.jpg",
    title: "Vay sản xuất kinh doanh",
    slug: "vay-san-xuat-kinh-doanh",
    description: "b",
    type: "loan",
  },
    {
    id: 3,
    image: "/image/2_9.png",
    title: "Vay cầm cố sổ tiết kiệm",
    slug: "vay-cam-co-stk",
    description: "c",
    type: "loan",
  }, 
  {
    id: 4,
    image: "/image/icon.png",
    title: "Tiền gửi có kỳ hạn",
    slug: "gui-co-ky-han",
    description: "d",
    type: "deposit",
  }, 
  {
    id: 5,
    image: "/image/footer.png",
    title: "Tiền gửi không kỳ hạn",
    slug: "gui-khong-ky-han",
    description: "e",
    type: "deposit",
  }, 
];

export async function getProduct(): Promise<Product[]> {
  return productList;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return productList.find((item) => item.slug === slug);
}
