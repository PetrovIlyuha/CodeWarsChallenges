function IPv4_to_Int32(ip) {
  return parseInt(
    ip
      .split(".")
      .map(i =>
        Number(i)
          .toString(2)
          .padStart(8, 0)
      )
      .join("")
      .toString(),
    2
  );
}

console.log(IPv4_to_Int32("128.32.10.1"));
