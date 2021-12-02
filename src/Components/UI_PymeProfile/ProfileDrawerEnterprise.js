import { Col, Divider, Drawer, Image, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
// import { getUserInfo } from "../../Redux/Actions/userInfoActions";

export const ProfileDrawerEnterprise = ({
	onCloseDrawer,
	pDrawer,
	idUsuario,
	screen,
}) => {
	const business = useSelector((state) => state.business);
	const {
		nombreEmpresa,
		email,
		fotoPerfil,
		sectorComercial,
		telefono,
		celular,
		fechaCreacion,
		descripcion,
		direccion,
		tipoCompannia,
		datosLaborales,
		extras,
	} = business;

	const DescriptionItem = ({ title, content }) => (
		<div className="site-description-item-profile-wrapper">
			<p className="site-description-item-profile-p-label text-gray-600">
				<strong>{title}</strong>
			</p>
			{content}
		</div>
	);

	return (
		<>
			{business && (
				<>
					<Drawer
						width={screen}
						placement="right"
						closable={false}
						onClose={onCloseDrawer}
						visible={pDrawer}
						title={nombreEmpresa}
					>
						<Image
							width={150}
							src={fotoPerfil}
							alt="fotoPerfil"
							className="rounded-2xl"
						/>

						<p
							className="site-description-item-profile-p font-Montserrat font-semibold text-xl text-gray-600"
							style={{ marginBottom: 24 }}
						>
							Informacion de la MIPYME
						</p>
						<p className="site-description-item-profile-p font-Montserrat font-semibold text-gray-600">
							Informacion MIPYME
						</p>
						<Row>
							<Col span={12}>
								<DescriptionItem title="Nombre" content={nombreEmpresa} />
							</Col>
							<Col span={12}>
								<DescriptionItem title="Correo" content={email} />
							</Col>
						</Row>
						<br />
						<Row>
							<Col span={12}>
								<DescriptionItem
									title="Sector Comercial"
									content={sectorComercial}
								/>
							</Col>
							<Col span={12}>
								<DescriptionItem
									title="Tipo Compañia"
									content={tipoCompannia}
								/>
							</Col>
							<br />
							<Col span={12}>
								<DescriptionItem title="Dirección" content={direccion} />
							</Col>
						</Row>
						<br />
						<Row>
							<Col span={12}>
								<DescriptionItem
									title="Fecha de Creación"
									content={fechaCreacion}
								/>
							</Col>
							<Col span={12}>
								<DescriptionItem
									title="Datos Laborales"
									content={datosLaborales}
								/>
							</Col>
						</Row>
						<br />
						<Row>
							<Col span={24}>
								<DescriptionItem title="Descripción" content={descripcion} />
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<DescriptionItem title="Información" content={extras} />
							</Col>
						</Row>
						<br />
						<Divider />

						<Divider />
						<p className="site-description-item-profile-p">Contacto</p>
						<Row>
							<Col span={12}>
								<DescriptionItem title="Correo" content={email} />
							</Col>
							<Col span={12}>
								<DescriptionItem title="Telefono" content={telefono} />
							</Col>
							<Col span={12}>
								<DescriptionItem title="Celular" content={celular} />
							</Col>
						</Row>
						<br />
						<br />
					</Drawer>
				</>
			)}
		</>
	);
};
