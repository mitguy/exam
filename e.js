const 
    fs = require(`node:fs`),
    c = require(`ansi-colors`),
    enquirer = require(`enquirer`),
    { Document, Paragraph, TextRun, AlignmentType, Packer } = require(`docx`)
;

(async function main() {
    await enquirer.prompt({
        type: `Select`,
        name: `main`,
        choices: [`new`, `clear`],
        message: `${c.bold.cyanBright(`Papers, please`)}`,
        styles: {
            default: c.reset,
            strong: c.bold.cyanBright,
            primary: c.bold.greenBright,
            em: c.bold.greenBright,
            success: c.bold.greenBright,
        },
        footer: `\nUse ${c.bold.cyanBright(`↑/↓`)} keys and ${c.bold.cyanBright(`Enter[ ↵ ]`)}.`,
    }).then(async (result) => {
        switch (result.main) {
            case `new`:
                console.clear();

                await enquirer.prompt([
                    {
                        type: `input`,
                        name: `fromsurname`,
                        message: `FROM: Surname`
                    },
                    {
                        type: `input`,
                        name: `fromname`,
                        message: `FROM: Name`
                    },
                    {
                        type: `input`,
                        name: `frompassserial`,
                        message: `FROM: Serial of passport`
                    },
                    {
                        type: `input`,
                        name: `frompassnumber`,
                        message: `FROM: Number of passport`
                    },
                    {
                        type: `input`,
                        name: `fromwhogave`,
                        message: `FROM: Passport given by`
                    },
                    {   
                        name: `fromwhengiven`,
                        message: `FROM: When passport was given`
                    },
                    {
                        type: `input`,
                        name: `fromaddresss`,
                        message: `FROM: Address`
                    },
                    {
                        type: `input`,
                        name: `tosurname`,
                        message: `TO: Surname`
                    },
                    {
                        type: `input`,
                        name: `toname`,
                        message: `TO: Name`
                    },
                    {
                        type: `input`,
                        name: `topassserial`,
                        message: `TO: Serial of passport`
                    },
                    {
                        type: `input`,
                        name: `topassnumber`,
                        message: `TO: Number of passport`
                    },
                    {
                        type: `input`,
                        name: `towhogave`,
                        message: `TO: Passport given by`
                    },
                    {
                        type: `input`,
                        name: `towhengiven`,
                        message: `TO: When passport was given`
                    },
                    {
                        type: `input`,
                        name: `toaddresss`,
                        message: `TO: Address`
                    },
                ]).then(async (result) => {
                    console.log(result);

                    // const doc = new Document({
                    //     sections: [
                    //         {
                    //             properties: {},
                    //             children: [
                    //                 new Paragraph({
                    //                     children: `
                    //                         Директору МИ ВлГУ
                    //                         профессору Жизнякову А.Л.
                    //                         от (ФИО студента (полностью)
                    //                         ${result.surname} ${result.name} ${result.middlename}
                    //                         студента группы ${result.group}
                    //                         факультета ${result.faculty}
                    //                     `.split(`\n`).map(line => new TextRun({ text: line, break: 1, font: `Times New Roman`, size: 28 })),
                    //                     alignment: AlignmentType.END,
                    //                 }),
                    //                 new Paragraph({
                    //                     children: [
                    //                         new TextRun({text: `Заявление`, font: `Times New Roman`, bold: true, italics: true, size: 36 }),
                    //                     ],
                    //                     alignment: AlignmentType.CENTER,
                    //                 }),
                    //                 new Paragraph({
                    //                     children: [
                    //                         new TextRun({
                    //                             text: `Прошу отчислить меня из числа обучающихся ${result.course} курса по собственному желанию.`,
                    //                             font: `Times New Roman`,
                    //                             size: 28,
                    //                         }),
                    //                     ],
                    //                     alignment: AlignmentType.JUSTIFIED,
                    //                 }),
                    //                 new Paragraph({
                    //                     children: [
                    //                         new TextRun({
                    //                             text: `${new Date().toLocaleDateString(`ru-RU`)} г.`,
                    //                             break: 1,
                    //                             font: `Times New Roman`,
                    //                             size: 28,
                    //                         }),
                    //                         new TextRun({
                    //                             text: `\t\t\t\t\t\t\t\t_____________`,
                    //                             font: `Times New Roman`,
                    //                             size: 28,
                    //                         }),
                    //                         new TextRun({
                    //                             break: 1,
                    //                             text: `\t\t\t\t\t\t\t\t\t\t    (подпись)`,
                    //                             font: `Times New Roman`,
                    //                             size: 28,
                    //                             italics: true,
                    //                         }),
                    //                     ],
                    //                 }),
                    //             ],
                    //         },
                    //     ],
                    // });

                    main();

                    // if (!Object.values(result).every(p => p === null || p === '')) {
                    //     Packer.toBuffer(doc).then((buffer) => {
                    //         fs.writeFileSync(`${result.surname.slice(0, -1)}_[${new Date().toLocaleDateString().replaceAll(`/`, `.`)}].docx`, buffer);
                    //     });

                    //     console.clear();
                    //     main();
                    // } else {
                    //     console.log(`${c.bold.redBright(`Error:`)} empty field\n`);

                    //     main();
                    // }
                });
            break;
            default:
            case `clear`:
                console.clear();

                main();
            break;
        };
    });
})();