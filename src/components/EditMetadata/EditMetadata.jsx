function EditMetadata(props) {
  //const details = props.details;

  const getEditHistory = () => {
    if (!props.editHistory || props.editHistory.length === 0) {
      return <div className='no-data'>No Edit History available</div>;
    }
    return props.editHistory.map((hist, index) => {
      return (
        <tr key={index}>
          <td className='text-dark' scope='row'>
            {hist.date}
          </td>
          <td className='text-dark'>{hist.time}</td>
          <td className='text-secondary'>{hist.status}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <div className='row mt-3 pb-3 request-fields g-0'>
        <div className='col'>
          <div className='form-label m-0'>Data Source</div>
          <div>{props.dataSource.id}</div>
        </div>
        <div className='col'>
          <div className='form-label m-0'>DB localization</div>
          <div>{props.dataSource.localization}</div>
        </div>
        <div className='col'>
          <div className='form-label m-0'>Last SYNC</div>
          <div>{props.dataSource.lastSync}</div>
        </div>
        <span className='btn-secondary-small m-1 width-auto'>Sync now</span>
      </div>

      <div className='mt-3'>
        <div className='form-label m-0'>Edit History</div>

        <table className='table table-dark table-borderless bg-transparent table-convoy-history m-0'>
          <tbody>{getEditHistory()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default EditMetadata;
