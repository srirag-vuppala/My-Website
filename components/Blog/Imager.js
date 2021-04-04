import { getStrapiMedia } from "@/lib/media";
import { Image } from '@chakra-ui/react';

const Imager = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <Image
      src={imageUrl}
      // alt={image.alternativeText || image.name}
    />
  );
};

export default Imager;