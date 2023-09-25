import { Watch, InfinitySpin } from 'react-loader-spinner';

function Spinner(params) {
  return (
    <Watch
      height="30"
      width="30"
      radius="27"
      color="black"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  )
}

export function TriSpinner() {
  return (
    <InfinitySpin
      width='200'
      color="#4fa94d"
    />
  )
}

export default Spinner;