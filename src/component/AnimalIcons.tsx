declare const require: {
    context(
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp,
    ): __WebpackModuleApi.RequireContext;
  };

const animalIcons = require.context('../../images', false, /\.png$/);

export const animalIconMap: { [key: string]: string } = animalIcons.keys().reduce((images: any, path: string) => {
    const iconName = path.replace('./', '').replace('.png', '');
    images[iconName] = animalIcons(path);

    return images;
}, {});

export const animalNames = Object.keys(animalIconMap);
export type AnimalNames = typeof animalNames[number];
