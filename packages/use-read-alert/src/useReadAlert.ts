import useReadAlertContext from './private/useReadAlertContext';

export default function useReadAlert() {
  const { readAlert } = useReadAlertContext();

  return readAlert;
}
