import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.unsplash.com",
            "manage.alkhalijya.com",
            "i.pravatar.cc",
            "www.gravatar.com",
            "media.istockphoto.com",
            "https://manage.alkhalijya.com",
            "swiperjs.com",
            "images-na.ssl-images-amazon.com",
            "ucarecdn.com",
            "boutiqat974.d.deli.work",
        ],
    },
};
export default withNextIntl(nextConfig);
