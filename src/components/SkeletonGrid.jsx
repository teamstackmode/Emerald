export default function SkeletonGrid({ count = 20 }) {
    return (
        <div
            className="
        px-6 md:px-16
        columns-2 sm:columns-3 md:columns-4 lg:columns-5
        gap-4
      "
        >
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="
            mb-4
            h-40
            rounded-xl
            break-inside-avoid

            bg-gradient-to-r
            from-white/5
            via-white/10
            to-white/5

            animate-shimmer
          "
                />
            ))}
        </div>
    );
}
