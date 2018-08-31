// declare module 'rollup-plugin-uglify';

// export function uglify(options: any): Promise<any>;
declare namespace uglify {
  function uglify(
    options?: any[]
  ): any;
}

export = uglify;
