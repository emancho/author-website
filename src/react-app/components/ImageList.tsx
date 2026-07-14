import {ImageList,ImageListItem} from '@mui/material';

interface ItemData {
  img: string;
  title: string;
}

interface GalleryProps {
  itemData: ItemData[]; 
  width: string;
  height: string;
}

export default function StandardImageList({ itemData, width, height }: GalleryProps) {
  return (
    <ImageList 
        sx={{ width: width, height: height, variant:"woven" }}      
        cols={3} 
        rowHeight={'auto'}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

