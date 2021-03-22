const getFileSize = (bytes, decimalPoint) => {
  if(bytes === 0) return '0 Bytes'
  let k = 1000
  let dm = decimalPoint || 1
  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

const getFileName = (val) => {
  if(typeof val === 'string') {
    if(val.indexOf('', 41) > 40) {
      return val.slice(0, 41) +"..."
    } else {
      return val
    }
  }
}
      
const getFileType = (val, type = 'type') => {
  const arrFile = val.split('/')
  if(type == 'format') {
    arrFile.shift()
  } else {
    arrFile.pop()
  }
  return arrFile.join("")
}
      
const getFileDate = (val) => {
  return new Date(val).toDateString()
}
      
const getFileImage = (image) => {
  if('name' in image && typeof image.name === 'string') {
    return URL.createObjectURL(image)
  }
}

const loadFileImage = (image) => {
  if('name' in image && typeof image.name === 'string') {
    URL.revokeObjectURL(image)
  }
}

/* Alternative */

const formatFileSize = (file) => {
  let nBytes = 0, oFiles = file, nFiles = oFiles.length;
  for (let nFileId = 0; nFileId < nFiles; nFileId++) {
    nBytes += oFiles[nFileId].size;
  }
  let sOutput = nBytes + " bytes";
  const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  for (let nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
  }
  return sOutput;
}

const humanFileSize = (bytes, si = false, dp = 1) => {
  const thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  const units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
  return bytes.toFixed(dp) + ' ' + units[u];
}

export {
  getFileSize,
  getFileName,
  getFileType,
  getFileImage,
  loadFileImage,
  formatFileSize,
  humanFileSize
}
