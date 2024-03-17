import { useAlert } from '@contexts/DialogProvider/AlertContext';

const AlertSample = () => {
  const alert = useAlert();

  const handleSingleAlertClick = async () => {
    const isOk = await alert({
      title: 'Alert',
      content: <>작업을 수행합니다.</>,
    });

    if (isOk) {
      console.log('alert callback...');
    }
  };

  const handleNotBackdropCloseAlertClick = async () => {
    const isOk = await alert({
      title: 'Alert',
      content: 'Not Backdrop Close',
      isBackdropClose: false,
    });

    if (isOk) {
      console.log('alert callback...');
    }
  };

  const handleMultipleAlertClick = async () => {
    await alert(
      {
        title: 'Alert ::Step1::',
        content: <>작업을 수행합니다.</>,
      },
      async () => {
        await alert(
          {
            title: 'Alert ::Step2::',
            content: <>작업을 수행합니다.</>,
          },
          async () => {
            const isOk = await alert({
              title: 'Alert ::Step3::',
              content: <>작업을 수행합니다.</>,
            });

            if (isOk) {
              console.log('alert callback...');
            }
          }
        );
      }
    );
  };

  const handleCustomButtonAlertClick = async () => {
    const isOk = await alert({
      title: 'Alert',
      content: <>작업을 수행합니다.</>,
      modules: ['custom'],
      customText: '커스텀버튼',
    });

    if (isOk) {
      console.log('alert callback...');
    }
  };

  return (
    <>
      <button onClick={handleSingleAlertClick}>single alert sample</button>
      <button onClick={handleNotBackdropCloseAlertClick}>
        backdrop click close alert sample
      </button>
      <button onClick={handleMultipleAlertClick}>multiple alert sample</button>
      <button onClick={handleCustomButtonAlertClick}>
        custom button alert sample
      </button>
    </>
  );
};

export default AlertSample;
