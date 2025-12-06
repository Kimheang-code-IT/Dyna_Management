import html2canvas from 'html2canvas'
import JSZip from 'jszip'
import certificateImage from '../assets/Certificate.png'

/**
 * Format date in Khmer format
 */
const formatDateKhmer = (dateString) => {
  if (!dateString) return ''
  
  try {
    const date = new Date(dateString)
    const months = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    
    return `${month} - ${day} - ${year}`
  } catch (error) {
    return dateString
  }
}

/**
 * Create a temporary certificate HTML element
 */
const createCertificateElement = (studentData) => {
  const container = document.createElement('div')
  container.id = 'temp-certificate-container'
  container.style.position = 'absolute'
  container.style.left = '-9999px'
  container.style.top = '0'
  container.style.width = '800px'
  container.style.height = '600px'
  container.style.background = 'white'
  
  const wrapper = document.createElement('div')
  wrapper.className = 'certificate-wrapper'
  wrapper.style.position = 'relative'
  wrapper.style.width = '100%'
  wrapper.style.height = '100%'
  wrapper.style.aspectRatio = '8.5/11'
  
  // Background image
  const bgImg = document.createElement('img')
  bgImg.src = certificateImage
  bgImg.style.position = 'absolute'
  bgImg.style.inset = '0'
  bgImg.style.width = '100%'
  bgImg.style.height = '100%'
  bgImg.style.objectFit = 'contain'
  bgImg.style.zIndex = '1'
  
  // Overlay content
  const overlay = document.createElement('div')
  overlay.style.position = 'absolute'
  overlay.style.inset = '0'
  overlay.style.zIndex = '2'
  
  // Student Name Khmer (Left side)
  const nameKhmerDiv = document.createElement('div')
  nameKhmerDiv.style.position = 'absolute'
  nameKhmerDiv.style.top = '40%'
  nameKhmerDiv.style.left = '12%'
  nameKhmerDiv.style.width = '35%'
  const nameKhmerText = document.createElement('div')
  nameKhmerText.style.textAlign = 'center'
  nameKhmerText.style.padding = '0 8px'
  nameKhmerText.style.fontSize = '25px'
  nameKhmerText.style.fontWeight = '300'
  nameKhmerText.style.color = '#b58618'
  nameKhmerText.style.fontFamily = "'AKbalthom KhmerGothic', 'Khmer', 'Khmer OS', sans-serif"
  nameKhmerText.style.lineHeight = '1.3'
  nameKhmerText.style.wordWrap = 'break-word'
  nameKhmerText.style.textShadow = '0 1px 3px rgba(255, 255, 255, 0.9)'
  nameKhmerText.textContent = studentData.nameKhmer || 'ឈ្មោះសិស្ស'
  nameKhmerDiv.appendChild(nameKhmerText)
  
  // Student Name English (Right side)
  const nameEnglishDiv = document.createElement('div')
  nameEnglishDiv.style.position = 'absolute'
  nameEnglishDiv.style.top = '40%'
  nameEnglishDiv.style.right = '9.5%'
  nameEnglishDiv.style.width = '35%'
  const nameEnglishText = document.createElement('div')
  nameEnglishText.style.textAlign = 'center'
  nameEnglishText.style.padding = '0 8px'
  nameEnglishText.style.fontSize = '24px'
  nameEnglishText.style.fontWeight = 'bold'
  nameEnglishText.style.color = '#b58618'
  nameEnglishText.style.fontFamily = "'Arial', 'Times New Roman', serif"
  nameEnglishText.style.lineHeight = '1.3'
  nameEnglishText.style.wordWrap = 'break-word'
  nameEnglishText.style.textShadow = '0 1px 3px rgba(255, 255, 255, 0.9)'
  nameEnglishText.textContent = studentData.nameEnglish || 'Name Student'
  nameEnglishDiv.appendChild(nameEnglishText)
  
  // Completion Date (Bottom center)
  const dateDiv = document.createElement('div')
  dateDiv.style.position = 'absolute'
  dateDiv.style.bottom = '25.5%'
  dateDiv.style.left = '48%'
  const dateText = document.createElement('div')
  dateText.style.padding = '0 8px'
  dateText.style.fontSize = '12px'
  dateText.style.color = '#1d1c1a'
  dateText.style.fontFamily = "'AKbalthom KhmerGothic'"
  dateText.style.textShadow = '0 1px 3px rgba(255, 255, 255, 0.9)'
  dateText.textContent = formatDateKhmer(studentData.date)
  dateDiv.appendChild(dateText)
  
  overlay.appendChild(nameKhmerDiv)
  overlay.appendChild(nameEnglishDiv)
  overlay.appendChild(dateDiv)
  
  wrapper.appendChild(bgImg)
  wrapper.appendChild(overlay)
  container.appendChild(wrapper)
  
  return container
}

/**
 * Generate a single certificate image from student data
 */
export const generateSingleCertificate = async (studentData) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Wait for image to load
      await new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => resolve()
        img.onerror = () => reject(new Error('Failed to load certificate image'))
        img.src = certificateImage
        if (img.complete) resolve()
      })
      
      // Create temporary certificate element
      const certificateElement = createCertificateElement(studentData)
      document.body.appendChild(certificateElement)
      
      // Wait for image in certificate element to load
      const bgImg = certificateElement.querySelector('img')
      if (bgImg) {
        await new Promise((resolve) => {
          if (bgImg.complete) {
            resolve()
          } else {
            bgImg.onload = resolve
            bgImg.onerror = resolve // Continue even if image fails
          }
        })
      }
      
      // Wait a bit for rendering
      await new Promise(resolve => setTimeout(resolve, 200))
      
      // Convert to canvas
      const canvas = await html2canvas(certificateElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 800,
        height: 600,
        allowTaint: false
      })
      
      // Remove temporary element
      document.body.removeChild(certificateElement)
      
      // Convert canvas to blob
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob)
        } else {
          reject(new Error('Failed to convert canvas to blob'))
        }
      }, 'image/png', 1.0)
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Generate certificates for all students and create a ZIP file
 */
export const generateAllCertificates = async (graduatedStudents, students, onProgress) => {
  try {
    const zip = new JSZip()
    const total = graduatedStudents.length
    let completed = 0
    
    for (const graduatedStudent of graduatedStudents) {
      try {
        const student = students.find(s => s.id === graduatedStudent.studentId)
        if (!student) {
          completed++
          if (onProgress) onProgress(completed, total)
          continue
        }
        
        const studentData = {
          nameKhmer: student.nameKhmer || student.name || '',
          nameEnglish: student.nameEnglish || student.name || '',
          date: graduatedStudent.graduatedDate || new Date().toISOString().split('T')[0]
        }
        
        // Generate certificate image
        const blob = await generateSingleCertificate(studentData)
        
        // Create filename
        const studentName = (student.nameEnglish || student.nameKhmer || student.name || 'Student').replace(/[^a-zA-Z0-9]/g, '_')
        const filename = `Certificate_${studentName}_${student.id}.png`
        
        // Add to ZIP
        zip.file(filename, blob)
        
        completed++
        if (onProgress) onProgress(completed, total)
      } catch (error) {
        console.error(`Error generating certificate for student ${graduatedStudent.studentId}:`, error)
        completed++
        if (onProgress) onProgress(completed, total)
      }
    }
    
    // Generate ZIP file
    const zipBlob = await zip.generateAsync({ type: 'blob' })
    
    // Create download link
    const url = URL.createObjectURL(zipBlob)
    const link = document.createElement('a')
    link.href = url
    const dateStr = new Date().toISOString().split('T')[0]
    link.download = `certificates_${dateStr}.zip`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    return zipBlob
  } catch (error) {
    console.error('Error generating certificates:', error)
    throw error
  }
}

