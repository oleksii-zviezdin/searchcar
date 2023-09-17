import {
  Img,
  ItemGallery,
  ShortDescription1,
  ShortDescription2,
  AddFavIcon,
} from 'components/Catalog/Catalog.styled';
import { LearnMoreButton } from 'components/Button/Button.styled';

export const CatalogItems = ({ data, handleFavorite }) => {
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
              <AddFavIcon onClick={() => handleFavorite(id)}></AddFavIcon>
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
                <span>{mileage}</span>
                <span
                  style={{
                    color: 'rgba(18, 20, 23, 0.10)',
                    fontSize: '16px',
                  }}
                >
                  {' '}
                  |{' '}
                </span>
                <span>{accessories[0].split(' ').slice(0, 3).join(' ')}</span>
              </p>
            </ShortDescription2>
            <LearnMoreButton>Learn more</LearnMoreButton>
          </ItemGallery>
        )
      )}
    </>
  );
};
