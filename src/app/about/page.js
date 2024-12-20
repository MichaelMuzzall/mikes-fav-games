import SimpleGallery from '../components/simplegallery'

const images = [
  {
    imageURL:
      'https://images.unsplash.com/photo-1733508244270-1155719f22d3?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:
      'https://images.unsplash.com/photo-1733508244270-1155719f22d3?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1920,
    height: 1207,
  },
]

export default function About() {
  return (
    <div className="p-12">
      <h1>About Page</h1>
      <SimpleGallery galleryID="image-gallery" images={images} />
    </div>
  )
}
