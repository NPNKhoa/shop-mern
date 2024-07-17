import { useTranslation } from 'react-i18next';

const ProductDescription = () => {
  const { t } = useTranslation();

  return (
    <div className='p-7 my-7'>
      <h3 className='text-xl font-semibold uppercase'>
        {t('text.product-description')}
      </h3>
      <div>
        <p className='py-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque omnis
          rem ipsa perspiciatis similique inventore expedita molestias natus
          laborum laboriosam minus, explicabo quos doloribus ad nulla nobis eos
          odit asperiores.
        </p>
        <img
          src='/images/product_13.png'
          alt='product_image'
          className='w-1/2 mx-auto'
        />
        <p className='py-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque omnis
          rem ipsa perspiciatis similique inventore expedita molestias natus
          laborum laboriosam minus, explicabo quos doloribus ad nulla nobis eos
          odit asperiores.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
