import { SecondaryButton } from "components/common/buttons"
import jsQR from "jsqr"
import React from "react"

type QRScannerProps = {
  onChange: (code: string) => void
  label: string
}
export const QRScanner = ({ onChange, label }: QRScannerProps): JSX.Element => {
  const uploadImage = async (): Promise<File> => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input")
      input.type = "file"
      input.accept = "image/*"

      input.onchange = (event) => {
        if (event && event.target && event.target.files) {
          resolve(event.target.files[0])
        } else {
          reject()
          // TODO what now?
        }
      }
      input.click()
    })
  }

  const readImage = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fr = new FileReader()
      fr.onload = () => {
        resolve(fr.result?.toString() || "")
      }
      fr.readAsDataURL(file)
    })
  }

  const loadImageHTMLElement = async (imageString: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const imageObjectToBeDrawnOnCanvas = new Image()
      imageObjectToBeDrawnOnCanvas.onload = () => {
        resolve(imageObjectToBeDrawnOnCanvas)
      }
      imageObjectToBeDrawnOnCanvas.src = imageString
    })
  }

  const getImageRedrawSizes = (image: HTMLImageElement): [number, number] => {
    let imageWidth = 1920
    let imageHeight = 1920

    const xScale = imageWidth / image.width
    const yScale = imageHeight / image.height

    const imageDoesNotNeedToBeResized = xScale > 1 && yScale > 1
    if (imageDoesNotNeedToBeResized) {
      return [image.width, image.height]
    }

    if (xScale > yScale) {
      imageHeight = image.height * xScale
    } else {
      imageWidth = image.width * yScale
    }
    return [imageWidth, imageHeight]
  }

  const getResizedImageData = async (image: HTMLImageElement): Promise<ImageData> => {
    return new Promise((resolve, reject) => {
      const imageResizeCanvas = document.createElement("canvas")

      const imageResizeCanvasContext = imageResizeCanvas.getContext("2d")

      if (imageResizeCanvasContext) {
        const [imageWidth, imageHeight] = getImageRedrawSizes(image)

        imageResizeCanvas.width = imageWidth
        imageResizeCanvas.height = imageHeight
        imageResizeCanvasContext.drawImage(image, 0, 0, imageWidth, imageHeight)

        const imageData = imageResizeCanvasContext.getImageData(0, 0, imageWidth, imageHeight)
        resolve(imageData)
      } else {
        reject()
      }
    })
  }

  const onUploadImage = async (): Promise<void> => {
    const file = await uploadImage()
    const imageString = await readImage(file)

    const imageElement = await loadImageHTMLElement(imageString)

    const imageData = await getResizedImageData(imageElement)

    const qrCode = jsQR(Uint8ClampedArray.from(imageData.data), imageElement.width, imageElement.height)
    onChange(qrCode?.data || "")
  }

  return (
    <div className="qr-scanner">
      <SecondaryButton onClick={onUploadImage}>{label}</SecondaryButton>
    </div>
  )
}
