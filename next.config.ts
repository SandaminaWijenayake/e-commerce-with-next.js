import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["vtkjlnzszvirnvbryotn.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vtkjlnzszvirnvbryotn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/ecommerce-storage/**",
      },
    ],
  },
};

export default nextConfig;
