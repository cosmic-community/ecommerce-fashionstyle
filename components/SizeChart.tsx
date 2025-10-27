export default function SizeChart() {
  const sizes = [
    { size: 'XS', chest: '32-34', waist: '24-26', hips: '34-36', inseam: '30' },
    { size: 'S', chest: '34-36', waist: '26-28', hips: '36-38', inseam: '30.5' },
    { size: 'M', chest: '36-38', waist: '28-30', hips: '38-40', inseam: '31' },
    { size: 'L', chest: '38-40', waist: '30-32', hips: '40-42', inseam: '31.5' },
    { size: 'XL', chest: '40-42', waist: '32-34', hips: '42-44', inseam: '32' },
    { size: 'XXL', chest: '42-44', waist: '34-36', hips: '44-46', inseam: '32.5' },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border dark:border-border-dark">
            <th className="text-left py-3 px-4 font-semibold">Size</th>
            <th className="text-left py-3 px-4 font-semibold">Chest (inches)</th>
            <th className="text-left py-3 px-4 font-semibold">Waist (inches)</th>
            <th className="text-left py-3 px-4 font-semibold">Hips (inches)</th>
            <th className="text-left py-3 px-4 font-semibold">Inseam (inches)</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((item) => (
            <tr key={item.size} className="border-b border-border dark:border-border-dark">
              <td className="py-3 px-4 font-semibold">{item.size}</td>
              <td className="py-3 px-4 text-muted-foreground dark:text-muted-foreground">{item.chest}</td>
              <td className="py-3 px-4 text-muted-foreground dark:text-muted-foreground">{item.waist}</td>
              <td className="py-3 px-4 text-muted-foreground dark:text-muted-foreground">{item.hips}</td>
              <td className="py-3 px-4 text-muted-foreground dark:text-muted-foreground">{item.inseam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}