import { Modal, Paper } from '@mui/material';
import PropTypes from 'prop-types';

const OpenModal = ({ open, onClose, children, style = {} }) => {
  const defaultStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: '4rem 2rem',
    paddingTop: '1.5rem',
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => onClose()}>
        <Paper
          style={{ ...defaultStyle, ...style }}
          className='flex flex-col justify-evenly items-center gap-8'>
          {children}
        </Paper>
      </Modal>
    </div>
  );
};

OpenModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default OpenModal;
