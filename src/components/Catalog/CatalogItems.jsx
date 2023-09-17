import {
  Img,
  ItemGallery,
  ShortDescription1,
  ShortDescription2,
  AddFavIcon,
  RemoveFavIcon,
} from 'components/Catalog/Catalog.styled';
import { LearnMoreButton } from 'components/Button/Button.styled';
import { useFavorite } from 'service/FavoriteContext';

export const CatalogItems = ({ data, handleFavorite }) => {
  const { isFavorite } = useFavorite();
  console.log(`isFavorite:${isFavorite}`);
  return (
    <>
      {data.map(
        ({
          id,
          img,
          year,
          make,
          model,
          type,
          mileage,
          rentalCompany,
          address,
          rentalPrice,
          accessories,
        }) => (
          <ItemGallery key={id}>
            <div style={{ position: 'relative' }}>
              <Img
                src={`${img}`}
                alt={`${make}`}
                width={274}
                height={268}
                loading="lazy"
                className="gallery__image"
              />
              {!isFavorite.includes(id) && (
                <AddFavIcon onClick={() => handleFavorite(id)}></AddFavIcon>
              )}
              {isFavorite.includes(id) && (
                <RemoveFavIcon
                  onClick={() => handleFavorite(id)}
                ></RemoveFavIcon>
              )}
            </div>
            <ShortDescription1>
              <p>
                <span>{make}</span>{' '}
                <span style={{ color: 'blue' }}>{model},</span>{' '}
                <span>{year}</span>
              </p>
              <p>
                <span>{rentalPrice}</span>
              </p>
            </ShortDescription1>
            <ShortDescription2>
              <p>
                {address?.split(',')[1]}
                <span
                  style={{
                    color: 'rgba(18, 20, 23, 0.10)',
                    fontSize: '16px',
                  }}
                >
                  {' '}
                  |{' '}
                </span>{' '}
                {address?.split(',')[2]}
                <span
                  style={{
                    color: 'rgba(18, 20, 23, 0.10)',
                    fontSize: '16px',
                  }}
                >
                  {' '}
                  |{' '}
                </span>{' '}
                {rentalCompany}
                <span
                  style={{
                    color: 'rgba(18, 20, 23, 0.10)',
                    fontSize: '16px',
                  }}
                >
                  {' '}
                  |{' '}
                </span>{' '}
                <span>{type}</span>
                <span
                  style={{
                    color: 'rgba(18, 20, 23, 0.10)',
                    fontSize: '16px',
                  }}
                >
                  {' '}
                  |{' '}
                </span>{' '}
                <span>{make}</span>
                <span
                  style={{
                    color: 'rgba(18, 20, 23, 0.10)',
                    fontSize: '16px',
                  }}
                >
                  {' '}
                  |{' '}
                </span>
                <span>{mileage.toLocaleString('en-US')}</span>
                <span
                  style={{
                    color: 'rgba(18, 20, 23, 0.10)',
                    fontSize: '16px',
                  }}
                >
                  {' '}
                  |{' '}
                </span>
                <span>{accessories[0].split(' ').slice(0, 2).join(' ')}</span>
              </p>
            </ShortDescription2>
            <LearnMoreButton>Learn more</LearnMoreButton>
          </ItemGallery>
        )
      )}
    </>
  );
};
