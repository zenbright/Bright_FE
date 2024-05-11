export const SYSTEM_ALERT = {
  TASK_DEL_TITLE: 'ARE YOU SURE ?',
  TASK_DEL_DES: '',
  PRJ_ALT_ACC_TITLE: 'Make Project Public ?',
  PRJ_ALT_ACC_DES: 'Changing project visibility might affect access and collaboration. Review the changes before confirming.',
  NOTIFICATION: 'SYSTEM NOTIFICATION',
};

export const BRIGHT_EMAIL = 'bright-tools-official@gmail.com';

export const RESULT_NOT_FOUND = 'No results found.';

export const WEBSITE_NAME = 'Bright';

export const FILE_SIZE_EXCEED = {
  TITLE: 'File Size Exceeds Limit',
  DES: 'The uploaded exceeds the maximum allowed size of 25MB. Please try uploading a smaller file.',
};

export const ALLOWED_EXTENSIONS = [
  // Image extensions
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  // Document extensions
  'pdf',
  'docx',
  'xlsx',
  'pptx',
  'txt',
  // Video extensions
  'mp4',
  'mov',
  'avi',
  'wmv',
];

export const FILE_UNSUPPORTED = {
  TITLE: 'Unsupported File Type',
  DES: `The uploaded file has an unsupported file type. Please upload files with the following extensions: ${ALLOWED_EXTENSIONS.join(', ')}`,
};
