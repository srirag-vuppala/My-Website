import { Image, AspectRatio } from '@chakra-ui/react';
import { getStrapiMedia } from "@/lib/media";

const Imager = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <AspectRatio ratio={4/3} maxH="400px">

    <Image
      src={imageUrl}
      // alt={image.alternativeText || image.name}
    />
    </AspectRatio>
  );
};

export default Imager;