

const galleryImages = [
    {
        src: '/images/posts/for-loop_img_17654504837290.jpg',
        alt: 'Java For Loop Concept',
        caption: 'Looping Structures'
    },
    {
        src: '/images/posts/if-else-if_img_17654503432918.jpg',
        alt: 'Conditional Logic',
        caption: 'Decision Making'
    },
    {
        src: '/images/posts/switch-case_img_17654503306300.jpg',
        alt: 'Switch Case Diagram',
        caption: 'Menu Driven Logic'
    },
    {
        src: '/images/posts/while-loop_img_17654503910648.png',
        alt: 'While Loop Flowchart',
        caption: 'Iterative Process'
    }
];

export default function Gallery() {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Visual Learning
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Explore concepts through detailed diagrams and examples.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-700 hover:-translate-y-1 transition-all duration-300">
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover object-center w-full h-48 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="p-4 text-white font-semibold text-lg">{image.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
