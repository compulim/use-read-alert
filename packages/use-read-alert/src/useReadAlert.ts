import useContext from './private/useContext';

export default function useReadAlert() {
  return useContext().readAlert;
}
