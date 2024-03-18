import AlertSample from './components/AlertSample';
import ApiSample from './components/ApiSample';
import Pending from './components/Pending';

const SamplePage = () => {
  return (
    <div>
      <AlertSample />

      <Pending>
        <ApiSample />
      </Pending>
    </div>
  );
};

export default SamplePage;
