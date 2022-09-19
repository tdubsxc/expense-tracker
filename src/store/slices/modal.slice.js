import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalType: null,
    modalProps: {},
    isVisible: false,
  },
  reducers: {
    openModal(draft, action) {
      draft.modalType = action.payload.modalType;
      draft.modalProps = action.payload.modalProps;
      draft.isVisible = true;
    },
    closeModal(draft, action) {
      draft.modalType = action.payload;
      draft.modalProps = {};
      draft.isVisible = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalSelector = (state) => state.modal;
export default modalSlice.reducer;
