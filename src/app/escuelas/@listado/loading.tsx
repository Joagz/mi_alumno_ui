type Props = {};

// !! Fetch a las escuelas creadas en la página (no al padrón)

const getData = async (key: string) => {
  console.log(key);
};

function LoadingState({}: Props) {
  return <div>Cargando...</div>;
}

export default LoadingState;
