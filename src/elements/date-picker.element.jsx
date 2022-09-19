import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';

const CustomDatePicker = generatePicker(dateFnsGenerateConfig);

export default CustomDatePicker;
